$root=Split-Path -Parent $PSScriptRoot
$files=@(
  'app.js','formal-names.js','index.html','mena-2026.js','mena-flag-debug.json',
  'mena-historical-1886-1923.js','mena-historical-1924-1999.js','mena-historical-aden.js',
  'mena-historical-yemen-extension.js','PROJECT_CONTEXT.md','README.md','styles.css',
  'modules/boundary-debug.js','modules/core.js','modules/events.js','modules/flags.js','modules/lazy-loader.js','modules/map.js'
)
foreach($file in $files){
  $source=Join-Path $root $file
  $target=Join-Path $root ('dist/'+$file)
  $targetDir=Split-Path -Parent $target
  if(!(Test-Path -LiteralPath $targetDir)){New-Item -ItemType Directory -Path $targetDir -Force | Out-Null}
  Copy-Item -LiteralPath $source -Destination $target -Force
}
Push-Location $root
try { Get-Content -LiteralPath (Join-Path $root 'scripts/verify.mjs') -Raw | node --input-type=module - }
finally { Pop-Location }
