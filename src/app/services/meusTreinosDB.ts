export interface ExercicioDTO {
  nome: string,
  agrupamento_muscular: string,
  musculo_especifico: string,
  equipamento: string,
  tipo: string,
  feito?: boolean;
}

export interface  MeuTreinoDTO {
  nome: string,
  exerciciosTreino:ExercicioDTO[]
}

// 1. Criando cada treino individualmente
const treinoPush: MeuTreinoDTO = {
  nome: "Push (Empurrar)",
  exerciciosTreino: [
    {
      nome: "Supino Reto com Barra",
      agrupamento_muscular: "Peito",
      musculo_especifico: "Peitoral Major",
      equipamento: "Barra e Banco",
      tipo: "Força"
    },
    {
      nome: "Desenvolvimento com Halteres",
      agrupamento_muscular: "Ombros",
      musculo_especifico: "Deltoide Anterior",
      equipamento: "Halteres",
      tipo: "Força"
    },
    {
      nome: "Tríceps Pulley",
      agrupamento_muscular: "Tríceps",
      musculo_especifico: "Tríceps Braquial",
      equipamento: "Polia",
      tipo: "Hipertrofia"
    }
  ]
};

const treinoPull: MeuTreinoDTO = {
  nome: "Pull (Puxar)",
  exerciciosTreino: [
    {
      nome: "Puxada Alta na Polia",
      agrupamento_muscular: "Costas",
      musculo_especifico: "Latíssimo do Dorso",
      equipamento: "Polia",
      tipo: "Força"
    },
    {
      nome: "Remada Curvada com Barra",
      agrupamento_muscular: "Costas",
      musculo_especifico: "Miolo de Costas",
      equipamento: "Barra",
      tipo: "Força"
    },
    {
      nome: "Rosca Direta com Halteres",
      agrupamento_muscular: "Bíceps",
      musculo_especifico: "Bíceps Braquial",
      equipamento: "Halteres",
      tipo: "Hipertrofia"
    }
  ]
};

const treinoLegs: MeuTreinoDTO = {
  nome: "Legs (Pernas)",
  exerciciosTreino: [
    {
      nome: "Agachamento Livre",
      agrupamento_muscular: "Quadríceps",
      musculo_especifico: "Quadríceps e Glúteos",
      equipamento: "Barra e Anilhas",
      tipo: "Força"
    },
    {
      nome: "Leg Press 45°",
      agrupamento_muscular: "Quadríceps",
      musculo_especifico: "Quadríceps",
      equipamento: "Máquina Leg Press",
      tipo: "Hipertrofia"
    },
    {
      nome: "Cadeira Flexora",
      agrupamento_muscular: "Posteriores de Coxas",
      musculo_especifico: "Isquiotibiais",
      equipamento: "Máquina",
      tipo: "Hipertrofia"
    }
  ]
};

const treinoCostas: MeuTreinoDTO = {
  nome: "Costas",
  exerciciosTreino: [
    {
      nome: "Barra Fixa",
      agrupamento_muscular: "Costas",
      musculo_especifico: "Latíssimo do Dorso",
      equipamento: "Peso Corporal",
      tipo: "Força"
    },
    {
      nome: "Remada Baixa",
      agrupamento_muscular: "Costas",
      musculo_especifico: "Romboides e Trapézio",
      equipamento: "Polia",
      tipo: "Hipertrofia"
    }
  ]
};

const treinoBiceps: MeuTreinoDTO = {
  nome: "Bíceps",
  exerciciosTreino: [
    {
      nome: "Rosca Martelo",
      agrupamento_muscular: "Bíceps",
      musculo_especifico: "Braquial e Bíceps",
      equipamento: "Halteres",
      tipo: "Hipertrofia"
    },
    {
      nome: "Rosca Scott",
      agrupamento_muscular: "Bíceps",
      musculo_especifico: "Cabeça Curta do Bíceps",
      equipamento: "Banco Scott e Barra W",
      tipo: "Isolamento"
    }
  ]
};

const treinoTriceps: MeuTreinoDTO = {
  nome: "Tríceps",
  exerciciosTreino: [
    {
      nome: "Tríceps Testa",
      agrupamento_muscular: "Tríceps",
      musculo_especifico: "Cabeça Longa",
      equipamento: "Barra W e Banco",
      tipo: "Força"
    },
    {
      nome: "Tríceps Corda",
      agrupamento_muscular: "Tríceps",
      musculo_especifico: "Cabeça Lateral",
      equipamento: "Polia com Corda",
      tipo: "Hipertrofia"
    }
  ]
};

const treinoQuadriceps: MeuTreinoDTO = {
  nome: "Quadríceps",
  exerciciosTreino: [
    {
      nome: "Cadeira Extensora",
      agrupamento_muscular: "Quadríceps",
      musculo_especifico: "Reto Femoral",
      equipamento: "Máquina Extensora",
      tipo: "Isolamento"
    },
    {
      nome: "Afundo com Halteres",
      agrupamento_muscular: "Quadríceps",
      musculo_especifico: "Quadríceps e Glúteos",
      equipamento: "Halteres",
      tipo: "Resistência"
    }
  ]
};

const treinoPosteriorCoxas: MeuTreinoDTO = {
  nome: "Posteriores de Coxas",
  exerciciosTreino: [
    {
      nome: "Stiff com Barra",
      agrupamento_muscular: "Posteriores de Coxas",
      musculo_especifico: "Isquiotibiais e Glúteos",
      equipamento: "Barra",
      tipo: "Força"
    },
    {
      nome: "Mesa Flexora",
      agrupamento_muscular: "Posteriores de Coxas",
      musculo_especifico: "Isquiotibiais",
      equipamento: "Máquina",
      tipo: "Hipertrofia"
    }
  ]
};

const treinoPanturrilha: MeuTreinoDTO = {
  nome: "Panturrilha",
  exerciciosTreino: [
    {
      nome: "Panturrilha em Pé na Máquina",
      agrupamento_muscular: "Panturrilha",
      musculo_especifico: "Gastrocnêmio",
      equipamento: "Máquina Smith ou Aparelho",
      tipo: "Hipertrofia"
    },
    {
      nome: "Panturrilha Sentado (Sóleo)",
      agrupamento_muscular: "Panturrilha",
      musculo_especifico: "Músculo Sóleo",
      equipamento: "Aparelho Sentado",
      tipo: "Resistência"
    }
  ]
};

const treinoGluteos: MeuTreinoDTO = {
  nome: "Glúteos",
  exerciciosTreino: [
    {
      nome: "Elevação Pélvica com Barra",
      agrupamento_muscular: "Glúteos",
      musculo_especifico: "Glúteo Máximo",
      equipamento: "Barra e Banco",
      tipo: "Força"
    },
    {
      nome: "Três apoios na Polia",
      agrupamento_muscular: "Glúteos",
      musculo_especifico: "Glúteo Médio",
      equipamento: "Polia",
      tipo: "Isolamento"
    }
  ]
};

const treinoAbdomem: MeuTreinoDTO = {
  nome: "Abdômen",
  exerciciosTreino: [
    {
      nome: "Abdominal Supra no Solo",
      agrupamento_muscular: "Abdômen",
      musculo_especifico: "Reto Abdominal (Superior)",
      equipamento: "Peso Corporal",
      tipo: "Resistência"
    },
    {
      nome: "Abdominal Infra (Elevação de Pernas)",
      agrupamento_muscular: "Abdômen",
      musculo_especifico: "Reto Abdominal (Inferior)",
      equipamento: "Solo ou Barra Fixa",
      tipo: "Força"
    }
  ]
};

// 2. Juntando todos em um array separado final
export const LISTA_GERAL_MEUS_TREINOS: MeuTreinoDTO[] = [
  treinoPush,
  treinoPull,
  treinoLegs,
  treinoCostas,
  treinoBiceps,
  treinoTriceps,
  treinoQuadriceps,
  treinoPosteriorCoxas,
  treinoPanturrilha,
  treinoGluteos,
  treinoAbdomem
];


export const LISTA_NOMES_MEUS_TREINOS = LISTA_GERAL_MEUS_TREINOS.map(treino => {return treino.nome})
