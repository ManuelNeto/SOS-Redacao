/**
 * Seed the database
 */
function seedThemes(req, res, userId) {
  // create some theme
  const theme = [
    { type: 'Justica e sistema punitivo no Brasil', proposedBy: userId},
    { type: 'A doacao de orgaos no Brasil', proposedBy: userId},
    { type: 'Os efeitos da obesidade para a sociedade brasileira', proposedBy: userId},
    { type: 'O desafio da mobilidade urbana no Brasil', proposedBy: userId},
    { type: 'Incremento salarial dos policiais e mudanca social', proposedBy: userId},
    { type: 'O drama das correntes migratorias', proposedBy: userId},
    { type: 'Direitos Humanos e Diversidade Cultural ', proposedBy: userId},
    { type: 'O drama das correntes migratorias', proposedBy: userId},
    { type: 'Expansao Urbana e Meio Ambiente ', proposedBy: userId},
    { type: 'Planejamento estrategico e sua finalidade ', proposedBy: userId},
    { type: 'Medicos Cubanos no Brasil ', proposedBy: userId},
    { type: 'Motivacao no trabalho ', proposedBy: userId},
    { type: 'Lixo eletronico: o Planeta em Perigo ', proposedBy: userId},
    { type: 'Racismo e Discriminacao Social', proposedBy: userId},
    { type: 'Desigualdade Social no Brasil', proposedBy: userId},
    { type: 'Preconceito Linguistico', proposedBy: userId},
    { type: 'Familia Contemporânea', proposedBy: userId},
    { type: 'Crise Mundial Economica', proposedBy: userId},
    { type: 'Politica Brasileira', proposedBy: userId},
    { type: 'Pobreza no Brasil', proposedBy: userId},
    { type: 'Inclusao e Exclusao Social', proposedBy: userId},
    { type: 'Deficientes Fisicos', proposedBy: userId},
    { type: 'Sistema Educacional no Brasil', proposedBy: userId},
    { type: 'Sistema Publico de Saúde', proposedBy: userId},
    { type: 'Aquecimento Global e Efeito Estufa', proposedBy: userId},
    { type: 'Orientacao e Diversidade Sexual', proposedBy: userId},
    { type: 'Homofobia', proposedBy: userId},
    { type: 'Expectativa de Vida', proposedBy: userId},
    { type: 'Analfabetismo no Brasil', proposedBy: userId},
    { type: 'Transporte Publico no Brasil', proposedBy: userId},
    { type: 'Violencia no Brasil', proposedBy: userId},
    { type: 'Mercado de Trabalho', proposedBy: userId},
    { type: 'Globalizacao', proposedBy: userId},
    { type: 'Cidadania', proposedBy: userId},
    { type: 'Novas Tecnologias', proposedBy: userId},
    { type: 'Meios de Comunicacao', proposedBy: userId},
    { type: 'Redes Sociais', proposedBy: userId},
    { type: 'Inclusao Digital', proposedBy: userId},
    { type: 'Maioridade Penal', proposedBy: userId},
    { type: 'Movimentos Sociais', proposedBy: userId},
    { type: 'Trabalho Infantil', proposedBy: userId},
    { type: 'Direitos da Crianca e do Adolescente', proposedBy: userId},
    { type: 'Democratizacao da Cultura', proposedBy: userId},
    { type: 'Arte Urbana', proposedBy: userId},
    { type: 'Mobilidade Urbana', proposedBy: userId},
    { type: 'Pedofilia', proposedBy: userId},
    { type: 'Reciclagem', proposedBy: userId},
    { type: 'Bullying nas Escolas', proposedBy: userId},
    { type: 'Sustentabilidade', proposedBy: userId},
    { type: 'Direitos Civis ', proposedBy: userId}
  ];

  // use the Theme model to insert/save
  for (event of theme) {
    var newTheme = new theme(event);
    newTheme.save();
  }

  // seeded!
  res.send('Database seeded!');
}

