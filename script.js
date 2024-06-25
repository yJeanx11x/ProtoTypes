//PROTOTYPES
//NEW OBJECT->OBJECT.PROTOTYPE
const objA={
        chaveA:'A'
}
const objB={
        chaveB:'B'
}
const ObjC=new Object()
ObjC.chaveC='C'

Object.setPrototypeOf(objA,objB)
Object.setPrototypeOf(objB,ObjC)
console.log(objA.chaveC)
