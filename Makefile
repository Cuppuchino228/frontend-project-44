install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

link:
	npm link

link:
	npx eslint .

fix:
	npx eslint --fix .