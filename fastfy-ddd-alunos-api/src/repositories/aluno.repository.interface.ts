export interface AlunoData {
    matricula: string;
    nome: string;
    idade: number;
    curso: string;
  }
  
  export interface AlunoRepository {
    create(data: AlunoData): Promise<AlunoData>;
    findByMatricula(matricula: string): Promise<AlunoData | null>;
    findAll(): Promise<AlunoData[]>;
    update(matricula: string, data: Partial<AlunoData>): Promise<AlunoData>;
    delete(matricula: string): Promise<void>;
  }
  