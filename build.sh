rm -rf tool
rm -rf public

cd ui
npx nuxi generate

cd ..
mkdir public
cp -r ui/.output/public/* public

go build -o tool/main

cp -r .ssh tool
cp -r config tool