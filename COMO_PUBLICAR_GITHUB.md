# 🚀 Como Publicar no GitHub Pages

## ⚡ Método Rápido (Via Interface do GitHub)

### 1️⃣ Criar Repositório

1. Acesse https://github.com/new
2. Preencha:
   - **Nome:** `nuclea-menu-demo` (ou o que você preferir)
   - **Descrição:** `Demo interativa do Nuclea Mega Menu - Menu hierárquico para WordPress`
   - **Público** ✅ (para GitHub Pages funcionar grátis)
3. ❌ **NÃO** marque "Initialize with README" (já temos um)
4. Clique em **"Create repository"**

### 2️⃣ Fazer Push dos Arquivos

Abra o terminal na pasta do projeto e execute:

```bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Initial commit: Nuclea Mega Menu demo"

# Adicionar remote (SUBSTITUA 'SEU-USUARIO' pelo seu username)
git remote add origin https://github.com/SEU-USUARIO/nuclea-menu-demo.git

# Verificar branch (deve ser 'main' ou 'master')
git branch -M main

# Fazer push
git push -u origin main
```

### 3️⃣ Ativar GitHub Pages

1. No repositório, vá em **Settings** (⚙️)
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione:
   - Branch: `main`
   - Pasta: `/docs` ✅ **IMPORTANTE!**
4. Clique em **Save**
5. Aguarde 1-2 minutos ⏳

### 4️⃣ Acessar a Demo

Após alguns minutos, sua URL estará disponível:

```
https://SEU-USUARIO.github.io/nuclea-menu-demo/
```

GitHub Pages mostrará a URL no topo da página Settings → Pages.

---

## 🎯 Método Via Terminal (Avançado)

### Se você tem SSH configurado:

```bash
# 1. Criar repo via GitHub CLI (opcional)
gh repo create nuclea-menu-demo --public --source=. --remote=origin

# 2. Adicionar arquivos
git add .

# 3. Commit
git commit -m "Initial commit: Nuclea Mega Menu demo"

# 4. Push
git push -u origin main

# 5. Ativar GitHub Pages via CLI
gh api repos/{owner}/{repo}/pages \
  -X POST \
  -F "source[branch]=main" \
  -F "source[path]=/docs"
```

---

## 📋 Checklist Pré-Publicação

Antes de fazer push, verifique:

- [ ] ✅ Pasta `/docs` contém:
  - [ ] `index.html`
  - [ ] `nuclea-menu.css`
  - [ ] `nuclea-menu-vanilla.js`
  - [ ] `README.md`
- [ ] ✅ `.gitignore` criado
- [ ] ✅ `node_modules/` não será enviado
- [ ] ✅ Arquivos sensíveis removidos (se houver)

---

## 🔧 Atualizações Futuras

Quando quiser atualizar a demo:

```bash
# 1. Fazer mudanças nos arquivos

# 2. Adicionar ao git
git add .

# 3. Commit
git commit -m "Atualiza menu com novas features"

# 4. Push
git push origin main

# 5. Aguardar 1-2 minutos para GitHub Pages atualizar
```

---

## 🌐 Domínio Customizado (Opcional)

Se quiser usar um domínio próprio (ex: `menu.nuclea.com.br`):

### 1. Adicionar arquivo CNAME

```bash
# Na pasta /docs
echo "menu.nuclea.com.br" > docs/CNAME
git add docs/CNAME
git commit -m "Adiciona domínio customizado"
git push
```

### 2. Configurar DNS

No seu provedor de DNS (GoDaddy, Cloudflare, etc.):

```
Tipo: CNAME
Nome: menu
Valor: SEU-USUARIO.github.io
TTL: 3600
```

### 3. Ativar no GitHub

1. Settings → Pages
2. Custom domain: `menu.nuclea.com.br`
3. ✅ Enforce HTTPS
4. Save

---

## 🐛 Troubleshooting

### Página 404

**Problema:** Acessa a URL e aparece 404

**Solução:**
1. Verifique se GitHub Pages está ativo (Settings → Pages)
2. Confirme que a pasta é `/docs` e não `/`
3. Aguarde 2-5 minutos após o push
4. Limpe cache do navegador (Ctrl+Shift+R)

### CSS/JS não carrega

**Problema:** Página abre mas sem estilos/funcionalidade

**Solução:**
1. Verifique se `nuclea-menu.css` e `nuclea-menu-vanilla.js` estão na pasta `/docs`
2. Abra o Console do navegador (F12) para ver erros
3. Verifique os caminhos no `index.html`:
   ```html
   <link rel="stylesheet" href="nuclea-menu.css">
   <script src="nuclea-menu-vanilla.js"></script>
   ```

### Push rejeitado

**Problema:** `git push` retorna erro

**Solução:**
```bash
# Puxar mudanças primeiro
git pull origin main --rebase

# Fazer push novamente
git push origin main
```

---

## 📊 Status do Deploy

Após fazer push, você pode ver o status do deploy:

1. Aba **Actions** no repositório
2. Clique no workflow "pages build and deployment"
3. Verde ✅ = Sucesso | Vermelho ❌ = Erro

---

## 🎉 Pronto!

Depois de seguir esses passos, sua demo estará online e acessível publicamente.

**URL padrão:**
```
https://SEU-USUARIO.github.io/nuclea-menu-demo/
```

**Compartilhe com:**
- 🔗 Clientes para visualização
- 👨‍💻 Desenvolvedores para referência
- 📱 Testes em diferentes dispositivos

---

## 🔗 Links Úteis

- 📖 [Documentação GitHub Pages](https://docs.github.com/en/pages)
- 🛠️ [GitHub CLI](https://cli.github.com/)
- 🌐 [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

**Dúvidas?** Consulte a [documentação oficial do GitHub Pages](https://pages.github.com/).
