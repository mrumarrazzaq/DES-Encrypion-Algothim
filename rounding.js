import { Apply_XOR } from "./xor.js";
import { e_box, final_permutation_table } from "./tables.js";
import { S1_Table } from "./tables.js";
import { S2_Table } from "./tables.js";
import { S3_Table } from "./tables.js";
import { S4_Table } from "./tables.js";
import { S5_Table } from "./tables.js";
import { S6_Table } from "./tables.js";
import { S7_Table } from "./tables.js";
import { S8_Table } from "./tables.js";
import { p_box } from "./tables.js";
import {dec2bin} from "./functions.js"

export function RoundFunction(left_plainText,right_plainText,key)
{
    // console.log(left_plainText, ' (',left_plainText.length,')');
    // console.log(right_plainText, ' (',right_plainText.length,')');
    // console.log(key , ' (',key.length,')');
    let expansion = ExpansionBox(right_plainText);
    console.log('Right Plain Text Expansion')
    console.log(expansion ,' (',expansion.length,')');

    let xor_result = Apply_XOR(expansion,key);
    console.log('First XOR')
    console.log(xor_result ,' (',xor_result.length,')');

    let S1 =  DivideXORResults(xor_result,0,6);
    let S2 =  DivideXORResults(xor_result,6,12);
    let S3 =  DivideXORResults(xor_result,12,18);
    let S4 =  DivideXORResults(xor_result,18,24);
    let S5 =  DivideXORResults(xor_result,24,30);
    let S6 =  DivideXORResults(xor_result,30,36);
    let S7 =  DivideXORResults(xor_result,36,42);
    let S8 =  DivideXORResults(xor_result,42,48);

    console.log(S1,'',S2,'',S3,'',S4,'',S5,'',S6,'',S7,'',S8);

    let Sub =[];
    Sub[1]= FindRowColumn(S1);
    Sub[2]= FindRowColumn(S2);
    Sub[3]= FindRowColumn(S3);
    Sub[4]= FindRowColumn(S4);
    Sub[5]= FindRowColumn(S5);
    Sub[6]= FindRowColumn(S6);
    Sub[7]= FindRowColumn(S7);
    Sub[8]= FindRowColumn(S8);

    // Substitution(Sub[1]);

    let combine_substitution =CombineSubstitution(Sub);
    console.log("Text After Substitution");
    console.log(combine_substitution ,' (',combine_substitution.length,')');

    let permutation_result = Permutation(combine_substitution);
    console.log("Text After Permutation");
    console.log(permutation_result ,' (',permutation_result.length,')');

    let xor_result_2 = Apply_XOR(permutation_result,left_plainText);
    console.log('Second XOR')
    console.log(xor_result_2 ,' (',xor_result_2.length,')');

    return xor_result_2;
}


export function ExpansionBox(right_plainText)
{
    let index=0;
    let array=[];
    let expansion='';

    for(let i=0 ; i<8 ; i++)
	{
		for(let j=0 ; j<6 ; j++)
		{
            array[index] = right_plainText[e_box[i][j]-1];
            expansion += right_plainText[e_box[i][j]-1];
			index++;
		}
	}
    return expansion;
}

function DivideXORResults(xor_result,from,to)
{
    let s='';
    for(let i=from;i<to;i++)
    {
        s +=xor_result[i];
    }
    return s;
}

function FindRowColumn(s)
{
    let row='';
    let binary_row='';
    let column='';
    let binary_column='';
    let row_column_value = [];

    binary_row += s[0];
    binary_row += s[s.length-1];

    for(let i=1;i<s.length-1;i++)
    {
        binary_column += s[i];
    }

    row = parseInt(binary_row, 2);
    column = parseInt(binary_column, 2);

    row_column_value.push(row);
    row_column_value.push(column);

    

    console.log(binary_row,'',binary_column, ' (',row,'',column,')');
    return row_column_value;
}

function Substitution(Sub)
{
    let binary = dec2bin(S1_Table[Sub[0]][Sub[1]],4);
    console.log(' (',S1_Table[Sub[0]][Sub[1]],') ',binary);
    return binary;
}

function CombineSubstitution(Sub)
{
    let binary='';
    for(let i=1;i<Sub.length;i++)
    {
        if(i==1)
        {
            binary += dec2bin(S1_Table[Sub[i][0]][Sub[i][1]],4);
        }
        if(i==2)
        {
            binary += dec2bin(S2_Table[Sub[i][0]][Sub[i][1]],4);
        }
        if(i==3)
        {
            binary += dec2bin(S3_Table[Sub[i][0]][Sub[i][1]],4);
        }
        if(i==4)
        {
            binary += dec2bin(S4_Table[Sub[i][0]][Sub[i][1]],4);
        }
        if(i==5)
        {
            binary += dec2bin(S5_Table[Sub[i][0]][Sub[i][1]],4);
        }
        if(i==6)
        {
            binary += dec2bin(S6_Table[Sub[i][0]][Sub[i][1]],4);
        }
        if(i==7)
        {
            binary += dec2bin(S7_Table[Sub[i][0]][Sub[i][1]],4);
        }
        if(i==8)
        {
            binary += dec2bin(S8_Table[Sub[i][0]][Sub[i][1]],4);
        }
    }
     
    return binary;
}

function Permutation(binary_text)
{
    let index=0;
    let array=[];
    let permutation_result='';

    for(let i=0 ; i<8 ; i++)
	{
		for(let j=0 ; j<4 ; j++)
		{
            array[index] = binary_text[p_box[i][j]-1];
            permutation_result += binary_text[p_box[i][j]-1];
			index++;
		}
	}

    return permutation_result;
}


export function FinalPermutation(final_key)
{
    let index=0;
    let array=[];
    let final_key_result='';

    for(let i=0 ; i<8 ; i++)
	{
		for(let j=0 ; j<8 ; j++)
		{
            array[index] = final_key[final_permutation_table[i][j]-1];
            final_key_result += final_key[final_permutation_table[i][j]-1];
			index++;
		}
	}

    return final_key_result;
}
