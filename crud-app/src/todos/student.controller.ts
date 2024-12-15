import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { studentService } from "./student.service";
import { CreateStudentDto } from "./create-to.dto";

//controller
//dito kinocontrol yon mga ginagawa sa create-to.dto.ts

@Controller('student')
export class StudentController{
    constructor(private readonly studentService: studentService){}
  
    @Post()
    create(@Body() dto: CreateStudentDto){
        return this.studentService.create(dto);
    }

   // Read Data
    @Get()
    findMany(){
        return this.studentService.findMany();
    }
 





}