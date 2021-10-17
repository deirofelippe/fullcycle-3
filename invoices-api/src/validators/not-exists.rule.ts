import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { EntityNotFoundError, getConnection } from "typeorm";

export function NotExists(
   entityClass: any,
   field = 'id',
   validationOptions?: ValidationOptions
) {
   return function (object: any, propertyName: string) {
      registerDecorator({
         name: 'NotExists',
         constraints: [entityClass, field],
         target: object.constructor,
         propertyName: propertyName,
         options: validationOptions,
         validator: NotExistsRule
      })
   }
}

@ValidatorConstraint({ name: 'NotExists', async: true })
export class NotExistsRule implements ValidatorConstraintInterface {
   async validate(value: string, args: ValidationArguments) {
      if (!value) return false;
      try {
         const [modelClass, field] = args.constraints
         const conn = getConnection('default')
         const repository = conn.getRepository(modelClass)
         const result = await repository.findOne({
            where: {
               [field]: value
            }
         })
         if (result) throw new Error(`${modelClass.name} already exists`)
         return true
      } catch (error) {
         console.error(error);
         return false
      }
   }
   
   defaultMessage(args: ValidationArguments) {
      return `${args.property} already exists`
   }
}