function trieParSelection(tab){

    for(let i=0; i<tab.length-1;i++){
        for(let j=i+1; j<tab.length;j++){
            if(tab[i]>tab[j]){ 

            let x= tab[i];

            tab[i]=tab[j];
            tab[j]=x;
        } 
       } 
   }
        return tab;

       
}
console.log(trieParSelection([6,1,3,2,4,5]));


