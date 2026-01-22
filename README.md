# 🎯 Visão Geral do Sistema

O "Sistema de Organização e Controle de Animais" tem como objetivo permitir ao usuário cadastrar, organizar e controlar informações relacionadas aos seus animais.
O usuário poderá registrar dados como nome, raça, data de nascimento, alimentação, vacinas e observações gerais, além de criar categorias personalizadas (como “cachorros”, “pássaros” etc.).
O sistema também contará com lembretes e controle de estoque, permitindo acompanhar a quantidade de animais de cada raça.

O público-alvo principal é o usuário individual, mas o sistema poderá futuramente se expandir para uso multiusuário. O foco será em uma interface simples e moderna, adequada inclusive para pessoas mais velhas.

---

# 👤 Usuários do Sistema

- Administrador: responsável por gerenciar categorias, usuários e configurações gerais.

- Usuário comum: pode cadastrar, editar e visualizar informações dos animais, bem como criar lembretes e categorias.

# ⚙️ Requisitos Funcionais

- RF01 -	Login de Usuário	O sistema deve permitir login de usuários para garantir segurança no acesso.
- RF02 -	Gerenciar Categorias	O usuário poderá criar, editar e excluir categorias de animais personalizadas.
- RF03 -	Cadastrar Animal	O sistema deve permitir cadastrar um animal com informações como nome, categoria, data de nascimento, raça, cor, foto, vacinas, alimentação e observações.
- RF04 -	Código Único de Animal	Cada animal cadastrado deve possuir um código único gerado automaticamente.
- RF05 -	Editar Animal	O usuário poderá editar as informações de um animal já cadastrado.
- RF06 -	Vincular Animal a Categoria	O usuário poderá associar cada animal a uma categoria específica e reatribuir se desejar.
- RF07 -	Lembretes Manuais	O usuário poderá criar lembretes manuais com data e descrição para atividades (ex: vacinas, remédios).
- RF08 -	Controle de Estoque	O sistema deve permitir visualizar a quantidade de animais por raça e listar os animais correspondentes.
- RF09 -	Exclusão de Categoria	Ao excluir uma categoria, os animais associados permanecerão no sistema sem categoria vinculada.
- RF10 -	Notificações de Lembretes	O sistema poderá exibir notificações dos lembretes criados (ex: “O que devemos fazer hoje”).

# ⚙️ Requisitos Não Funcionais

- RNF01 -	Usabilidade	A interface deve ser simples e intuitiva, priorizando facilidade de uso e design moderno.
- RNF02 -	Portabilidade	O sistema deve ser acessível via navegador web e aplicativo mobile.
- RNF03 -	Operação Offline	O sistema deve funcionar offline e sincronizar dados com a nuvem quando houver conexão.
- RNF04 -	Segurança	O sistema deve possuir autenticação de usuários e controle de acesso (admin e usuário comum).
- RNF05 -	Desempenho	O sistema deve suportar até 100 registros de animais por usuário, mantendo tempo de resposta adequado.
- RNF06 -	Armazenamento	Os dados devem ser armazenados localmente e na nuvem, garantindo sincronização entre dispositivos.

# ⚖️ Regras de Negócio

1. Cada animal deve possuir um código único e inalterável.

2. A exclusão de categorias não deve excluir os animais vinculados a ela.

3. Os lembretes serão criados manualmente pelo usuário.

4. O controle de estoque deve exibir tanto o número total de animais por raça quanto a lista dos animais correspondentes.

# 🧩 Considerações Técnicas

- O sistema poderá ser desenvolvido com arquitetura em camadas (Front-end, Back-end e Banco de Dados).

- Para suportar a operação offline e sincronização, recomenda-se uso de banco local (SQLite) e sincronização via API REST com banco em nuvem (como Firebase, Supabase ou MongoDB Atlas).

- Interface responsiva voltada para usabilidade e acessibilidade.
