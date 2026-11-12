export const materials = ['C. Malla 250','C. Malla 325','Dolomita malla 30','Cemento blanco','Cal hidratada','HPMC (LMK 100PS)','Látex en polvo (VAE)'];
export const prices = [420,400,240,2125,1000,21000,13900];
export const formulas = [
 {id:'muros',type:'Enfoscado',name:'Muros · Gen 2',column:'C',percent:[25,25,27,20,2,.3,.7],water:[4.5,4.5],note:''},
 {id:'bloquelon-a',type:'Revoque',name:'Bloquelón · fórmula A',column:'E',percent:[52,0,25,20,2,.3,.7],water:[5,5.5],note:''},
 {id:'bloquelon-b',type:'Revoque',name:'Bloquelón · fórmula B',column:'G',percent:[23.32,23.32,23.32,27,0,.4,.7],water:[5,5.5],note:'El Excel suma 98,06 %. Revisa los porcentajes antes de preparar.'},
 {id:'gen1',type:'Enfoscado',name:'Gen 1',column:'I',percent:[0,7,64.6,25,2,.4,.7],water:[4.5,4.5],note:'El Excel suma 99,7 %. Se interpretó «O.4%» como 0,4 %. Revisa la fórmula.'},
 {id:'exterior',type:'Estuco',name:'Eco-estuco exterior',column:'J',percent:[0,52,16,32,0,.4,.5],water:[5.5,6],note:'HPMC aparece como 0,4 sin símbolo %. Aquí se propone 0,4 % y «O.5%» se interpreta como 0,5 %. Así suma 100,9 %. Confirma y corrige la fórmula.'},
 {id:'interior',type:'Estuco',name:'Eco-estuco interior',column:'K',percent:[0,89,0,10,0,.4,.6],water:[6,6.5],note:''},
];
export function calculate(kg:number,percent:number[],water:number[]) {
 if(!Number.isFinite(kg)||kg<=0||kg>100000)throw Error('Ingresa una cantidad mayor que cero y hasta 100.000 kg.');
 if(percent.length!==7||percent.some(p=>!Number.isFinite(p)||p<0||p>100)||Math.abs(percent.reduce((a,b)=>a+b,0)-100)>.000001)throw Error('Los porcentajes deben sumar 100 %.');
 const rows=materials.map((name,i)=>({name,grams:kg*10*percent[i],cost:kg*percent[i]/100*prices[i]}));
 return {rows,cost:rows.reduce((a,b)=>a+b.cost,0),water:water.map(l=>kg/25*l*1000)};
}
