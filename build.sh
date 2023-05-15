rm -rf bin
rm -rf public

cd ui
npx nuxi generate

cd ..
mkdir public
cp -r ui/.output/public/* public

go build -o bin/main

cp -r config bin