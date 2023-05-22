rm -rf tool

cd ui
npx nuxi generate

cd ../src
rm -rf public
cp -r ../ui/.output/public .

go build -o ../tool/main

cd ..
cp -r src/config tool