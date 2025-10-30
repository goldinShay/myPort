# Generates simple emerald "S" icons for the portfolio
param()

Add-Type -AssemblyName System.Drawing

function New-IconImage {
    param(
        [string]$Path,
        [int]$Size
    )

    $bitmap = New-Object System.Drawing.Bitmap $Size, $Size
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $graphics.Clear([System.Drawing.Color]::FromArgb(0,0,0,0))

    $emerald = [System.Drawing.Color]::FromArgb(255, 16, 185, 129)
    $backgroundBrush = New-Object System.Drawing.SolidBrush $emerald
    $graphics.FillEllipse($backgroundBrush, 0, 0, $Size, $Size)
    $backgroundBrush.Dispose()

    $fontSize = [Math]::Max([Math]::Round($Size * 0.55), 1)
    $font = New-Object System.Drawing.Font ('Segoe UI', $fontSize, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
    $format = New-Object System.Drawing.StringFormat
    $format.Alignment = [System.Drawing.StringAlignment]::Center
    $format.LineAlignment = [System.Drawing.StringAlignment]::Center
    $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
    $rectangle = New-Object System.Drawing.RectangleF 0, 0, $Size, $Size
    $graphics.DrawString('S', $font, [System.Drawing.Brushes]::White, $rectangle, $format)

    $font.Dispose()
    $format.Dispose()
    $graphics.Dispose()

    $directory = [System.IO.Path]::GetDirectoryName($Path)
    if (-not (Test-Path $directory)) {
        New-Item -Path $directory -ItemType Directory -Force | Out-Null
    }

    $bitmap.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
    $bitmap.Dispose()
}

New-IconImage 'client/public/android-chrome-192x192.png' 192
New-IconImage 'client/public/android-chrome-512x512.png' 512
New-IconImage 'client/public/apple-touch-icon.png' 180
New-IconImage 'client/public/favicon.png' 64

# Create favicon.ico from the 64x64 bitmap
$iconBitmap = New-Object System.Drawing.Bitmap 64, 64
$iconGraphics = [System.Drawing.Graphics]::FromImage($iconBitmap)
$iconGraphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$iconGraphics.Clear([System.Drawing.Color]::FromArgb(0,0,0,0))
$emerald = [System.Drawing.Color]::FromArgb(255, 16, 185, 129)
$brush = New-Object System.Drawing.SolidBrush $emerald
$iconGraphics.FillEllipse($brush, 0,0,64,64)
$brush.Dispose()
$font = New-Object System.Drawing.Font ('Segoe UI', 32, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$format = New-Object System.Drawing.StringFormat
$format.Alignment = [System.Drawing.StringAlignment]::Center
$format.LineAlignment = [System.Drawing.StringAlignment]::Center
$iconGraphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$rect = New-Object System.Drawing.RectangleF 0,0,64,64
$iconGraphics.DrawString('S', $font, [System.Drawing.Brushes]::White, $rect, $format)
$font.Dispose()
$format.Dispose()
$iconGraphics.Dispose()

$iconDir = 'client/public'
$icoPath = Join-Path $iconDir 'favicon.ico'
$iconHandle = $iconBitmap.GetHicon()
$icon = [System.Drawing.Icon]::FromHandle($iconHandle)
$fileStream = [System.IO.File]::Create($icoPath)
$icon.Save($fileStream)
$fileStream.Close()
$iconBitmap.Dispose()
