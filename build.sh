gulp build
OLD='\.\./\.\./\.\./bower_components/bootstrap-sass/assets/fonts/bootstrap'
NEW='\.\./fonts'
sed -i '' "s#$OLD#$NEW#g" dist/styles/app.css
zip -r -X dist.zip dist/*
