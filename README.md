# Personal Website — Jekyll (GitHub Pages)

This site is built with Jekyll and designed to run on GitHub Pages without custom plugins.

## Deploy
1. Create a **public** GitHub repo.
2. Add all files from this folder.
3. Commit & push to the `main` branch.
4. In **Settings → Pages**:
   - Choose **Deploy from a branch**.
   - Select `main` and folder `/ (root)`.
5. If this is a **project site**, keep `baseurl: "/<repo>"` in `_config.yml`.
   If this is a **user site** (`username.github.io`), set `baseurl: ""`.

## Update Publications
Edit `_data/publications.yml`. The homepage pulls from this file automatically.

