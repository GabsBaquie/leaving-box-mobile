export interface ModuleManual {
  name: string;
  description: string;
  pdfUrl?: string;
  hasLevels: boolean;
  levels?: Level[];
  defuseMethod: string;
}

export interface Rules {
  name: string;
  description: string;
}

export interface Level {
  name: string;
  description: string;
  rules: Rules;
}
