# 🏛️ Mesquita Advocacia Previdenciária
## Site: www.prevplanejada.com.br

---

## 📁 Estrutura do Projeto

```
prevplanejada/
├── client/
│   ├── public/
│   │   └── images/          ← COLOQUE SUAS FOTOS AQUI
│   │       ├── logo-mesquita.png
│   │       ├── foto1.png
│   │       └── foto2.png
│   └── src/
│       └── pages/
│           └── Home.tsx     ← EDITE O CONTEÚDO DO SITE AQUI
├── .github/workflows/       ← Build automático (não mexa)
├── netlify.toml             ← Config Netlify
├── vercel.json              ← Config Vercel
└── package.json
```

---

## 🖼️ IMPORTANTE: Adicionar as Imagens

Antes de publicar, você precisa colocar suas fotos na pasta `client/public/images/`:

| Arquivo | Descrição |
|---|---|
| `logo-mesquita.png` | Logo do escritório (aparece no menu) |
| `foto1.png` | Sua foto principal (aparece no Hero) |
| `foto2.png` | Foto no escritório (aparece no Sobre) |

---

## 🚀 Como Publicar no GitHub Pages (Grátis)

### Passo 1 — Criar conta no GitHub
1. Acesse [github.com](https://github.com) e crie uma conta

### Passo 2 — Criar repositório
1. Clique em **"New repository"**
2. Nome: `prevplanejada`
3. Marque como **Público**
4. Clique **"Create repository"**

### Passo 3 — Fazer upload dos arquivos
**Opção A (mais fácil) — GitHub Desktop:**
1. Baixe [GitHub Desktop](https://desktop.github.com)
2. File → Add Local Repository → selecione esta pasta
3. Faça commit e clique "Publish repository"

**Opção B — Upload direto no site:**
1. No repositório criado, clique em **"uploading an existing file"**
2. Arraste todos os arquivos desta pasta
3. Clique **"Commit changes"**

### Passo 4 — Ativar GitHub Pages
1. No repositório, vá em **Settings → Pages**
2. Em "Source", selecione **"GitHub Actions"**
3. Salve — o build começará automaticamente!
4. Em alguns minutos seu site estará em: `https://SEU-USUARIO.github.io/prevplanejada`

### Passo 5 — Conectar seu domínio (prevplanejada.com.br)
1. Em **Settings → Pages → Custom domain**, digite: `www.prevplanejada.com.br`
2. Acesse o painel do seu registrador de domínio (onde você comprou)
3. Adicione um registro **CNAME**:
   - Nome: `www`
   - Valor: `SEU-USUARIO.github.io`
4. Marque **"Enforce HTTPS"** no GitHub Pages

---

## 🌐 Alternativa: Publicar no Netlify (mais simples)

1. Crie conta em [netlify.com](https://netlify.com)
2. Conecte ao seu repositório GitHub
3. Clique **"Deploy"** — o arquivo `netlify.toml` cuida do resto
4. Em **Site Settings → Domain Management**, adicione `www.prevplanejada.com.br`

---

## ✏️ Como Atualizar o Site

### Para editar textos/conteúdo:
1. Abra o arquivo `client/src/pages/Home.tsx`
2. Edite o texto desejado
3. Salve e faça commit no GitHub
4. O site atualiza automaticamente em ~2 minutos!

### Para trocar as fotos:
1. Substitua os arquivos em `client/public/images/`
2. Mantenha os mesmos nomes de arquivo
3. Faça commit — atualiza automaticamente

### Principais seções para editar no Home.tsx:
- **WhatsApp** → linha com `whatsappNumber`
- **Título principal** → texto dentro de `<h1>`
- **Serviços** → array de objetos com `title`, `description`, `details`
- **Depoimentos** → Cards com nome e texto
- **Endereço** → No footer, `R. Manuel Castelo Branco...`

---

## 📞 Dados de Contato no Site

- **WhatsApp:** (85) 99944-4105
- **E-mail:** rodrigomesquita@prevplanejada.com.br
- **Instagram:** @prev.planejada
- **OAB/CE:** 40996
