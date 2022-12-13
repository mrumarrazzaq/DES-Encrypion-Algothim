
export function Apply_XOR(right_plainText,key)
{
    let xor_result='';
    for(let i=0;i<right_plainText.length;i++)
    {
        if(right_plainText[i]==key[i])
        {
            xor_result += 0;
        }
        if(right_plainText[i]!=key[i])
        {
            xor_result += 1;
        }
    }
    return xor_result;
}



