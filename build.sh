rm -rf tool

cd ui
npx nuxi generate

cd ../src
cp -r ../ui/.output/public/* public

go build -o ../tool/main

cd ..
cp -r src/config tool