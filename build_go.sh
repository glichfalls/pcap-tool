rm -rf tool

cd src

go build -o ../tool/main

cd ..
cp -r src/config tool