echo "Build for gh-pages deploy..."
npm run build
echo "Copy build assets to tmp/ before switching branches..."
rm -rf tmp/
mkdir tmp
cp -R dist/ tmp/dist/
cp index.html tmp/
echo "Switch to gh-pages branch..."
git checkout gh-pages
echo "Stage update commit..."
cp tmp/index.html index.html
cp -R tmp/dist/ dist/
git add index.html
git add dist/
git commit -m "Update gh-pages"
rm -rf tmp/
echo "Push update to github..."
git push origin gh-pages
echo "Switch back to master branch..."
git checkout master
echo "DONE"
