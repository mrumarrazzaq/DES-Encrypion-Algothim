import { initial_permutation } from './tables.js';
import { pc_1 } from './tables.js';
import { pc_2 } from './tables.js';


export function PrintKeysBeforePC_2(keys)
{
    for(let i=0;i<keys.length;i++)
    {
        console.log('K',i,' : ',keys[i],' (',keys[i].length,')');
        
    }
}

export function PrintKeysAfterPC_2(keys)
{
    for(let i=0;i<keys.length;i++)
    {
        console.log('Key',i,' : ',keys[i],' (',keys[i].length,')');
    }
}


export function Print(array)
{
    for(let i=0;i<array.length;i++)
    {
        console.log(array[i]);
    }
}
export function Convert_To_Hex(text)
{
    let hex_values=[];
    for(let i=0;i<text.length;i++)
    {
        if(text[i]=='A'||text[i]=='B'||text[i]=='C'||text[i]=='D'||text[i]=='E'||text[i]=='F'||
        text[i]=='a'||text[i]=='b'||text[i]=='c'||text[i]=='d'||text[i]=='e'||text[i]=='f'
        )
        {
            hex_values[i]=text.codePointAt(i)-55;
        }
        else
        {
            hex_values[i]=parseInt(text[i]);
        }
        
        // console.log(text.codePointAt(i));
        
    }
    // console.log(ascii_values);
    return hex_values;
}
export function Convert_To_ASCII(text)
{
    let ascii_values=[];
    for(let i=0;i<text.length;i++)
    {
        ascii_values[i]=text.codePointAt(i);
        // console.log(text.codePointAt(i));
        
    }
    // console.log(ascii_values);
    return ascii_values;
}

export function Convert_To_Character(binary)
{
    let character_values=[];
    for(let i=0;i<binary.length;i++)
    {
        character_values[i]=String.fromCharCode(binary[i]);
        // console.log(text.codePointAt(i));
        
    }
    // console.log(character_values);
    return character_values;
}


export function Decimal_To_Binary(ascii,bit)
{
    let binary='';
    for(let i=0;i<ascii.length;i++)
    {
        binary += dec2bin(ascii[i],bit);//8
        console.log(dec2bin(ascii[i],bit));//8
    }
    // console.log( binary);
    return binary;
}

export function dec2bin(dec,bit) 
{
    return  dec.toString(2).padStart(bit, "0");
};


export function Apply_Initial_Permutation(binary_text)
{
    let index=0;
    let array=[];
    let plaintext_binary_after_initial_permutation='';

    for(let i=0 ; i<8 ; i++)
	{
		for(let j=0 ; j<8 ; j++)
		{
            array[index] = binary_text[initial_permutation[i][j]-1];
            plaintext_binary_after_initial_permutation += binary_text[initial_permutation[i][j]-1];
			index++;
		}
	}

    return plaintext_binary_after_initial_permutation;
}


export function PC_1(binary_text)
{
    let index=0;
    let array=[];
    let key_binary_after_pc_1='';

    for(let i=0 ; i<8 ; i++)
	{
		for(let j=0 ; j<7 ; j++)
		{
            array[index] = binary_text[pc_1[i][j]-1];
            key_binary_after_pc_1 += binary_text[pc_1[i][j]-1];
			index++;
		}
	}

    return key_binary_after_pc_1;
}

export function Left_Half(binary_text)
{
    let array=[];
    let left_half='';
    for(let i=0;i<(binary_text.length/2);i++)
    {
        array[i]=binary_text[i];
        left_half +=binary_text[i];
    }
    return left_half;
}
export function Right_Half(binary_text)
{
    let array=[];
    let right_half='';
    let index=0;
    for(let i=(binary_text.length/2);i<binary_text.length;i++)
    {
        array[index]=binary_text[i];
        right_half += binary_text[i];
    }
    return right_half;
}


export function Binary_Shift(binary_text,shift)
{
	
    let shift_result='';
	let temp1,temp2;
	
	if(shift==1)
	{
		temp1=binary_text[0];
	}
	if(shift==2)
	{
		temp1=binary_text[0];
		temp2=binary_text[1];
	}
    for(let i=shift;i<binary_text.length;i++)
    {
        shift_result +=binary_text[i];
        // console.log( binary_text[i]);
    }
    
    if(shift==1)
    {
    	shift_result +=temp1;
	}
    if(shift==2)
    {
    	shift_result +=temp1;
    	shift_result +=temp2;
	}
    
    return shift_result;
}

export function PC_2(binary_text)
{
    let index=0;
    let array=[];
    let key_binary_after_pc_2='';

    for(let i=0 ; i<8 ; i++)
	{
		for(let j=0 ; j<6 ; j++)
		{
            array[index] = binary_text[pc_2[i][j]-1];
            key_binary_after_pc_2 += binary_text[pc_2[i][j]-1];
			index++;
		}
	}

    return key_binary_after_pc_2;
}


export function Separate(string,from,to)
{
    let result='';
    for(let i=from;i<to;i++)
    {
        result +=string[i];
    }
    return result;
}

export function Binary_To_Decimal(binary)
{
    let array = [];
    for(let i=1;i<binary.length;i++)
    {
        array.push(parseInt(binary[i], 2));
    }
    return array;
}

export function Decimal_To_HexDecimal(decimal)
{
    let array = [];
    for(let i=0;i<decimal.length;i++)
    {
        if(decimal[i]>9)
        {
            if(decimal[i]==10)
            {
                array.push('A');
            }else
            if(decimal[i]==11)
            {
                array.push('B');
            }else
            if(decimal[i]==12)
            {
                array.push('C');
            }else
            if(decimal[i]==13)
            {
                array.push('D');
            }else
            if(decimal[i]==14)
            {
                array.push('E');
            }else
            if(decimal[i]==15)
            {
                array.push('F');
            }
        }
        else
        {
            array.push(decimal[i]);
        }
    }
    return array;
}