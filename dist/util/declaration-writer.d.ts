import type { PrismaJsonTypesGeneratorConfig } from './config';
/**
 * A class to help with reading and writing the Prisma Client types file concurrently and
 * converting positions indexes according with previous changes.
 */
export declare class DeclarationWriter {
  readonly filepath: string;
  private readonly options;
  readonly multifile: boolean;
  private readonly importFileExtension;
  constructor(
    filepath: string,
    options: Pick<PrismaJsonTypesGeneratorConfig, 'namespace'>,
    multifile: boolean,
    importFileExtension: string | undefined
  );
  /** The prisma's index.d.ts file content. */
  content: string;
  private changes;
  template(): Promise<string>;
  /** Loads the original file of sourcePath into memory. */
  load(): Promise<void>;
  /** Save the original file of sourcePath with the content's contents */
  save(): Promise<void>;
  /**
   * Stack change to be applied before declaration save
   */
  replace(start: number, end: number, text: string): void;
}
export declare function getNamespacePrelude({
  namespace,
  isNewClient,
  dotExt
}: {
  namespace: string;
  isNewClient: boolean;
  dotExt: string;
}): Promise<string>;
//# sourceMappingURL=declaration-writer.d.ts.map
