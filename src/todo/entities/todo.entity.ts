import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Common } from 'src/common/common.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Todo extends Common {
  @IsString()
  @ApiProperty({
    example: 'Eat',
    description: '투두 리스트의 제목',
  })
  @Column('varchar')
  title: string;

  @IsString()
  @ApiProperty({
    example: 'get energy',
    description: '투두 리스트 실행',
  })
  @Column('varchar')
  desc: string;

  @Column('boolean', { default: false })
  isComplete: boolean;
}
