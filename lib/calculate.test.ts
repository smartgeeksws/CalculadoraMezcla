import {test} from 'node:test';import assert from 'node:assert/strict';import {calculate,formulas} from './calculate.ts';
test('Bolsa de 25 kg y costo exacto',()=>{const r=calculate(25,formulas[0].percent,formulas[0].water);assert.deepEqual(r.rows.map(x=>x.grams),[6250,6250,6750,5000,500,75,175]);assert.equal(r.cost,21877.5);assert.deepEqual(r.water,[4500,4500]);});
test('Escala y rango de agua',()=>{const r=calculate(1,formulas[1].percent,formulas[1].water);assert.equal(r.rows.reduce((s,r)=>s+r.grams,0),1000);assert.deepEqual(r.water,[200,220]);});
test('No calcular porcentajes incompletos o pesos inválidos',()=>{assert.throws(()=>calculate(25,[0,52,16,32,0,.4,.5],[5.5,6]));for(const n of [0,-1,NaN,Infinity])assert.throws(()=>calculate(n,formulas[0].percent,formulas[0].water));});

test('Todas las fórmulas suman 100 % y producen 25 kg',()=>{for(const f of formulas){assert.ok(Math.abs(f.percent.reduce((a,b)=>a+b,0)-100)<1e-6,f.id);const r=calculate(25,f.percent,f.water);assert.ok(Math.abs(r.rows.reduce((s,row)=>s+row.grams,0)-25000)<1e-6,f.id);}});
