import { TestBed, async } from '@angular/core/testing';
import { ConvertidorComponent } from "./convertidor.component";


describe('Prueba para convertir numero romanos', ()=>{
    describe('Prueba para la funcion Unidades', ()=>{
        it('Convierte el numero 5 dando como resultadola letra V', ()=>{
            //Arrange
            let convertidor = new ConvertidorComponent();
            //Act
            let result = convertidor.Unidades(5);
            //Assert
            expect(result).toEqual('V');
        });

        it('Convierte el numero 0 dando como resultado "" ', ()=>{
            //Arrange
            let convertidor = new ConvertidorComponent();
            //Act
            let result = convertidor.Unidades(0);
            //Assert
            expect(result).toEqual('');
        });
    });

    describe('Prueba para la funcion centena', ()=>{
        it('Convierte el numero 28 tomando el 2 como valor a convertir'+
        'dando como resultado XX', ()=>{
            //Arrange
            let convertidor = new ConvertidorComponent();
            //Act
            let number = '28';
            let result = convertidor.Decenas(Number(number.charAt(0)));
            //Assert
            expect(result).toEqual('XX');
        });

        it('Convierte el numero 00 tomando el 0 como valor a convertir'+
        'dando como resultado ""', ()=>{
            //Arrange
            let convertidor = new ConvertidorComponent();
            //Act
            let number = '00';
            let result = convertidor.Decenas(Number(number));
            //Assert
            expect(result).toEqual('');
        });
    });

    describe('Prueba para la funcion Centenas', ()=>{
        it('Convierte el numero 528 tomando el 5 como valor a convertir'+
        'dando como resultado D', ()=>{
            //Arrange
            let convertidor = new ConvertidorComponent();
            //Act
            let number = '528';
            let result = convertidor.Centanas(Number(number.charAt(0)));
            //Assert
            expect(result).toEqual('D');
        });

        it('Convierte el numero 000 tomando el 0 como valor a convertir'+
        'dando como resultado ""', ()=>{
            //Arrange
            let convertidor = new ConvertidorComponent();
            //Act
            let number = '000';
            let result = convertidor.Decenas(Number(number.charAt(0)));
            //Assert
            expect(result).toEqual('');
        });
    });

    describe('Prueba para la funcion Miles', ()=>{
        it('Convierte el numero 1528 tomando el 1 como valor a convertir'+
        'dando como resultado M', ()=>{
            //Arrange
            let convertidor = new ConvertidorComponent();
            //Act
            let number = '1528';
            let result = convertidor.Miles(Number(number.charAt(0)));
            //Assert
            expect(result).toEqual('M');
        });

        it('Convierte el numero 0000 tomando el 0 como valor a convertir'+
        'dando como resultado ""', ()=>{
            //Arrange
            let convertidor = new ConvertidorComponent();
            //Act
            let number = '0000';
            let result = convertidor.Miles(Number(number.charAt(0)));
            //Assert
            expect(result).toEqual('');
        }); 
    });

    describe('Prueba para la funcion Convertidor', ()=>{
        it('Convierte el numero 1 dando como resultado I', ()=>{
            //Arrange
            let convertidor = new ConvertidorComponent();
            //Act
            convertidor.Convertidor(1);
            let result = convertidor.unidad;
            //Assert
            expect(result).toEqual('I');
        });

        it('Convierte el numero 64 dando como resultado LXIV', ()=>{
            //Arrange
            let convertidor = new ConvertidorComponent();
            //Act
            convertidor.Convertidor(64);
            let result = convertidor.decena + convertidor.unidad;
            //Assert
            expect(result).toEqual('LXIV');
        });

        it('Convierte el numero 514 dando como resultado DXIV', ()=>{
            //Arrange
            let convertidor = new ConvertidorComponent();
            //Act
            convertidor.Convertidor(514);
            let result = convertidor.centena + convertidor.decena + convertidor.unidad;
            //Assert
            expect(result).toEqual('DXIV');
        });

        it('Convierte el numero 4868 dando como resultado |IV|DXXXLXVIII', ()=>{
            //Arrange
            let convertidor = new ConvertidorComponent();
            //Act
            convertidor.Convertidor(4868);
            let result = convertidor.mil + convertidor.centena + convertidor.decena + convertidor.unidad;
            //Assert
            expect(result).toEqual('|IV|DXXXLXVIII');
        });

        it('Al ingresar un numero mayor a 9999 se mostrara como mensaje "Por favor ingrese un numero entero mayor a 0 y menor a 10,000"', ()=>{
            //Arrange
            let convertidor = new ConvertidorComponent();
            //Act
            convertidor.Convertidor(159875);
            let result = convertidor.error;
            //Assert
            expect(result).toEqual('Por favor ingrese un numero entero mayor a 0 y menor a 10,000');
        });

        it('Al ingresar un numero menor a 0 se mostrar ""', ()=>{
            //Arrange
            let convertidor = new ConvertidorComponent();
            //Act
            convertidor.Convertidor(-1);
            let result = convertidor.error;
            //Assert
            expect(result).toEqual('');
        });
    });
});