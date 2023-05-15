rm -rf bin
rm -rf dist

cd ui
npx nuxi build

cd ..
mkdir dist
cp -r ui/dist/* dist

go build -o bin/main