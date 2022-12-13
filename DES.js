import { Convert_To_ASCII , Convert_To_Hex } from './functions.js';
import { Convert_To_Character } from './functions.js';
import { Decimal_To_Binary } from './functions.js';
import { Apply_Initial_Permutation } from './functions.js';
import { PC_1 } from './functions.js';
import { PC_2 } from './functions.js';
import { Left_Half } from './functions.js';
import { Right_Half } from './functions.js';
import { Binary_Shift } from './functions.js';
import { PrintKeysBeforePC_2 } from './functions.js';
import { PrintKeysAfterPC_2 } from './functions.js';
import { Separate } from './functions.js';
import { Binary_To_Decimal, Decimal_To_HexDecimal } from './functions.js';
import { FinalPermutation, RoundFunction } from './rounding.js';





let plainText  = 'PAKISTAN';
let initialKey = 'UMARRAZZ';
let bits = 8; // 4 for Hexadecimal
let isASCII =true;


console.log('_____________________________________________');
console.log(plainText);

let plainText_ascii_value; 
if(isASCII)
{
    plainText_ascii_value = Convert_To_ASCII(plainText);
    console.log(plainText_ascii_value);
}
else
{
    plainText_ascii_value = Convert_To_Hex(plainText);
    console.log(plainText_ascii_value);
}



let plainText_binary = Decimal_To_Binary(plainText_ascii_value,bits);
console.log('Plain Text Binary');
console.log(plainText_binary, ' (', plainText_binary.length, ')');

let plainText_Initial_Permutation = Apply_Initial_Permutation(plainText_binary);
console.log('Plain Text After Initial Permutation');
console.log(plainText_Initial_Permutation, ' (', plainText_Initial_Permutation.length, ')');

let left_plainText = Left_Half(plainText_Initial_Permutation);
console.log('L0 (Left Plain Text)');
console.log(left_plainText, ' (', left_plainText.length, ')');

let right_plainText = Right_Half(plainText_Initial_Permutation);
console.log('R0 (Right Plain Text)');
console.log(right_plainText, ' (', right_plainText.length, ')');

console.log('_____________________________________________');

console.log(initialKey);


let key_ascii_value;
if(isASCII)
{
    key_ascii_value = Convert_To_ASCII(initialKey);
    console.log(key_ascii_value);
}else{
    key_ascii_value = Convert_To_Hex(initialKey);
    console.log(key_ascii_value);
}

let key_binary = Decimal_To_Binary(key_ascii_value,bits);
console.log('Initial Key Binary');
console.log(key_binary, ' (', key_binary.length, ')');

let key_After_PC_1 = PC_1(key_binary);
console.log('Initial Key After PC 1');
console.log(key_After_PC_1, ' (', key_After_PC_1.length, ')');

let left_half_key = Left_Half(key_After_PC_1);
console.log('C0 : ', left_half_key, ' (', left_half_key.length, ')');
let right_half_key = Right_Half(key_After_PC_1);
console.log('D0 : ', right_half_key, ' (', right_half_key.length, ')');

console.log('--------------------------------');

let C1 = Binary_Shift(left_half_key, 1);
let D1 = Binary_Shift(right_half_key, 1);
let C2 = Binary_Shift(C1, 1);
let D2 = Binary_Shift(D1, 1);
let C3 = Binary_Shift(C2, 2);
let D3 = Binary_Shift(D2, 2);
let C4 = Binary_Shift(C3, 2);
let D4 = Binary_Shift(D3, 2);
let C5 = Binary_Shift(C4, 2);
let D5 = Binary_Shift(D4, 2);
let C6 = Binary_Shift(C5, 2);
let D6 = Binary_Shift(D5, 2);
let C7 = Binary_Shift(C6, 2);
let D7 = Binary_Shift(D6, 2);
let C8 = Binary_Shift(C7, 2);
let D8 = Binary_Shift(D7, 2);
let C9 = Binary_Shift(C8, 1);
let D9 = Binary_Shift(D8, 1);
let C10 = Binary_Shift(C9, 2);
let D10 = Binary_Shift(D9, 2);
let C11 = Binary_Shift(C10, 2);
let D11 = Binary_Shift(D10, 2);
let C12 = Binary_Shift(C11, 2);
let D12 = Binary_Shift(D11, 2);
let C13 = Binary_Shift(C12, 2);
let D13 = Binary_Shift(D12, 2);
let C14 = Binary_Shift(C13, 2);
let D14 = Binary_Shift(D13, 2);
let C15 = Binary_Shift(C14, 2);
let D15 = Binary_Shift(D14, 2);
let C16 = Binary_Shift(C15, 1);
let D16 = Binary_Shift(D15, 1);

console.log('Initial Keys Half Half Shifted Binary');
console.log('Left rotate by 1 bit');
console.log('C1 : ', C1);
console.log('D1 : ', D1);
console.log('Left rotate by 1 bit');
console.log('C2 : ', C2);
console.log('D2 : ', D2);
console.log('Left rotate by 2 bits');
console.log('C3 : ', C3);
console.log('D3 : ', D3);
console.log('Left rotate by 2 bits');
console.log('C4 : ', C4);
console.log('D4 : ', D4);
console.log('Left rotate by 2 bits');
console.log('C5 : ', C5);
console.log('D5 : ', D5);
console.log('Left rotate by 2 bits');
console.log('C6 : ', C6);
console.log('D6 : ', D6);
console.log('Left rotate by 2 bits');
console.log('C7 : ', C7);
console.log('D7 : ', D7);
console.log('Left rotate by 2 bits');
console.log('C8 : ', C8);
console.log('D8 : ', D8);
console.log('Left rotate by 1 bit');
console.log('C9 : ', C9);
console.log('D9 : ', D9);
console.log('Left rotate by 2 bits');
console.log('C10 : ', C10);
console.log('D10 : ', D10);
console.log('Left rotate by 2 bits');
console.log('C11 : ', C11);
console.log('D11 : ', D11);
console.log('Left rotate by 2 bits');
console.log('C12 : ', C12);
console.log('D12 : ', D12);
console.log('Left rotate by 2 bits');
console.log('C13 : ', C13);
console.log('D13 : ', D13);
console.log('Left rotate by 2 bits');
console.log('C14 : ', C14);
console.log('D14 : ', D14);
console.log('Left rotate by 2 bits');
console.log('C15 : ', C15);
console.log('D15 : ', D15);
console.log('Left rotate by 1 bit');
console.log('C16 : ', C16);
console.log('D16 : ', D16);

let K = [];
K[0] = left_half_key + right_half_key;
K[1] = C1 + D1;
K[2] = C2 + D2;
K[3] = C3 + D3;
K[4] = C4 + D4;
K[5] = C5 + D5;
K[6] = C6 + D6;
K[7] = C7 + D7;
K[8] = C8 + D8;
K[9] = C9 + D9;
K[10] = C10 + D10;
K[11] = C11 + D11;
K[12] = C12 + D12;
K[13] = C13 + D13;
K[14] = C14 + D14;
K[15] = C15 + D15;
K[16] = C16 + D16;

console.log('Initial Keys Before PC 2 ');
PrintKeysBeforePC_2(K);

let Key = [];
for (let i = 0; i < K.length; i++) {
    Key[i] = PC_2(K[i]);
}
console.log('Initial Keys After PC 2 ');
PrintKeysAfterPC_2(Key);

console.log('----------------------------------');
console.log('=====================================');
console.log('Round 1');
console.log('L0 : ',left_plainText);
console.log('R0 : ',right_plainText);
console.log('Key 1 : ',Key[1]);
let left1 = right_plainText;
let right1 = RoundFunction(left_plainText, right_plainText, Key[1]);
console.log('L1 : ',left1);
console.log('R1 : ',right1);

console.log('=====================================');
console.log('Round 2');
console.log('L1 : ',left1);
console.log('R1 : ',right1);
console.log('Key 2 : ',Key[2]);
let left2 = right1;
let right2 = RoundFunction(left1, right1, Key[2]);
console.log('L2 : ',left2);
console.log('R2 : ',right2);

console.log('=====================================');
console.log('Round 3');
let left3 = right2;
let right3 = RoundFunction(left2, right2, Key[3]);
console.log('L3 : ',left3);
console.log('R3 : ',right3);

console.log('=====================================');
console.log('Round 4');
let left4 = right3;
let right4 = RoundFunction(left3, right3, Key[4]);
console.log('L4 : ',left4);
console.log('R4 : ',right4);

console.log('=====================================');
console.log('Round 5');
let left5 = right4;
let right5 = RoundFunction(left4, right4, Key[5]);
console.log('L5 : ',left5);
console.log('R5 : ',right5);

console.log('=====================================');
console.log('Round 6');
let left6 = right5;
let right6 = RoundFunction(left5, right5, Key[6]);
console.log('L6 : ',left6);
console.log('R6 : ',right6);

console.log('=====================================');
console.log('Round 7');
let left7 = right6;
let right7 = RoundFunction(left6, right6, Key[7]);
console.log('L7 : ',left7);
console.log('R7 : ',right7);

console.log('=====================================');
console.log('Round 8');
let left8 = right7;
let right8 = RoundFunction(left7, right7, Key[8]);
console.log('L8 : ',left8);
console.log('R8 : ',right8);

console.log('=====================================');
console.log('Round 9');
let left9 = right8;
let right9 = RoundFunction(left8, right8, Key[9]);
console.log('L9 : ',left9);
console.log('R9 : ',right9);

console.log('=====================================');
console.log('Round 10');
let left10 = right9;
let right10 = RoundFunction(left9, right9, Key[10]);
console.log('L10 : ',left10);
console.log('R10 : ',right10);

console.log('=====================================');
console.log('Round 11');
let left11 = right10;
let right11 = RoundFunction(left10, right10, Key[11]);
console.log('L11 : ',left11);
console.log('R11 : ',right11);

console.log('=====================================');
console.log('Round 12');
let left12 = right11;
let right12 = RoundFunction(left11, right11, Key[12]);
console.log('L12 : ',left12);
console.log('R12 : ',right12);

console.log('=====================================');
console.log('Round 13');
let left13 = right12;
let right13 = RoundFunction(left12, right12, Key[13]);
console.log('L13 : ',left13);
console.log('R13 : ',right13);

console.log('=====================================');
console.log('Round 14');
let left14 = right13;
let right14 = RoundFunction(left13, right13, Key[14]);
console.log('L14 : ',left14);
console.log('R14 : ',right14);

console.log('=====================================');
console.log('Round 15');
let left15 = right14;
let right15 = RoundFunction(left14, right14, Key[15]);
console.log('L15 : ',left15);
console.log('R15 : ',right15);

console.log('=====================================');
console.log('Round 16');
let left16 = right15;
let right16 = RoundFunction(left15, right15, Key[16]);
console.log('L16 : ',left16);
console.log('R16 : ',right16);

let final_key = '';

final_key = right16 + left16;
console.log('Final Key');
console.log(final_key, ' (', final_key.length, ')');

let final_permutation_result = FinalPermutation(final_key);
console.log('Final Permutation Result');
console.log(final_permutation_result, ' (', final_permutation_result.length, ')');

let cyper_text_binary = [];
if(isASCII)
{
    cyper_text_binary[1] = Separate(final_permutation_result, 0, 8);
    cyper_text_binary[2] = Separate(final_permutation_result, 8, 16);
    cyper_text_binary[3] = Separate(final_permutation_result, 16, 24);
    cyper_text_binary[4] = Separate(final_permutation_result, 24, 32);
    cyper_text_binary[5] = Separate(final_permutation_result, 32, 40);
    cyper_text_binary[6] = Separate(final_permutation_result, 40, 48);
    cyper_text_binary[7] = Separate(final_permutation_result, 48, 56);
    cyper_text_binary[8] = Separate(final_permutation_result, 56, 64);
    console.log(cyper_text_binary[1], '', cyper_text_binary[2], '', cyper_text_binary[3], '', cyper_text_binary[4], '',
        cyper_text_binary[5], '', cyper_text_binary[6], '', cyper_text_binary[7], '', cyper_text_binary[8]);
}
else
{
    cyper_text_binary[1] = Separate(final_permutation_result, 0, 4);
    cyper_text_binary[2] = Separate(final_permutation_result, 4, 8);
    cyper_text_binary[3] = Separate(final_permutation_result, 8, 12);
    cyper_text_binary[4] = Separate(final_permutation_result, 12, 16);
    cyper_text_binary[5] = Separate(final_permutation_result, 16, 20);
    cyper_text_binary[6] = Separate(final_permutation_result, 20, 24);
    cyper_text_binary[7] = Separate(final_permutation_result, 24, 28);
    cyper_text_binary[8] = Separate(final_permutation_result, 28, 32);
    cyper_text_binary[9] = Separate(final_permutation_result, 32, 36);
    cyper_text_binary[10] = Separate(final_permutation_result, 36, 40);
    cyper_text_binary[11] = Separate(final_permutation_result, 40, 44);
    cyper_text_binary[12] = Separate(final_permutation_result, 44, 48);
    cyper_text_binary[13] = Separate(final_permutation_result, 48, 52);
    cyper_text_binary[14] = Separate(final_permutation_result, 52, 56);
    cyper_text_binary[15] = Separate(final_permutation_result, 56, 60);
    cyper_text_binary[16] = Separate(final_permutation_result, 60, 64);
    console.log(cyper_text_binary[1], '', cyper_text_binary[2], '', cyper_text_binary[3], '', cyper_text_binary[4], '',
    cyper_text_binary[5], '', cyper_text_binary[6], '', cyper_text_binary[7], '', cyper_text_binary[8],
    cyper_text_binary[9], '', cyper_text_binary[10], '', cyper_text_binary[11], '', cyper_text_binary[12], '',
    cyper_text_binary[13], '', cyper_text_binary[14], '', cyper_text_binary[15], '', cyper_text_binary[16],    );
}



let cyper_text_numeric = Binary_To_Decimal(cyper_text_binary,bits);
console.log(cyper_text_numeric);


if(isASCII)
{
    let cyper_text = Convert_To_Character(cyper_text_numeric);
    console.log(cyper_text);
}
else
{
    let cyper_text = Decimal_To_HexDecimal(cyper_text_numeric);
    console.log(cyper_text);
}


console.log('=============================================================================');






