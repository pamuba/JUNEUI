class A{
    constructor(x){
        this.a = x
    }
}
class B extends A{
    constructor(x,y){
        super();
        this.b = y
    }
}
class C extends B{
    constructor(x,y,z){
        super();
        this.a = x;
        this.b = y;
        this.c = z
    }
}
let c = new C(11,22,33);
console.log(c.a,c.b,c.c);