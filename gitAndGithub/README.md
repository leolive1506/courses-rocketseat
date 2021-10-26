# CONFIGURAR CHAVE SSH
. `SSH` - Tipo de conexão conexão da máquina com server gitHub

2. `No terminal`:
    ssh-keygen -t rsa -b 4096 -C "email@email.com"
        mesmo email do github
        Depois so apertar enter nas pgt

3. `Pegar a chave`: copiar o que tem dentro do arquivo
    cat ~/.ssh/id_rsa.pub 


3. `No site github` 
    settings > SSH and GPG keys > new SSH key
        colar aqui

4.
    restante config
        https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key


# Linkando um repositorio remoto com local 
    Na mão
    echo "# demo" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin https:github.com/leolive1506/demo.git
    git push -u origin main


# Ver os repositorios que tem na nuvem
    git remote -v

# Fazendo modificação
```
git commit -am "msg"
```
> Faz a o add automaticamente dos arquivos monitorados
> Não precisa usar o ```git push -u origin main``` pode usar ```git push``` caso tenha feito o primeiro push

# Criar universos paralelos
```
git branch nameBranch
```

`Entrar na branch`
```
git checkout nameBranch
```
