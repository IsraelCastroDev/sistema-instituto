import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCareersLevelDto {
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  name: string;

  @IsNotEmpty({ message: 'El ID de la carrera es requerido' })
  @IsInt({ message: 'careerId debe ser un entero' })
  careerId: number;

  @IsNotEmpty({ message: 'El orden de la carrera es requerido' })
  @IsInt({ message: 'sequenceOrder debe ser un entero' })
  sequenceOrder: number;

  @IsOptional()
  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  description: string;
}
