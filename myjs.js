let message=" * ";
function rectangle(){
    for(i=1;i<=3;i++){
        for(j=1;j<=12;j++){
            document.write(message);
        }
    document.write("<br>");    
    }
}

function isosceles_triangle(){
    for(i=1;i<=5;i++){
        document.write(message);
        document.write("<br>");
        message+=" * ";
    }
}

function right_triangle(){
    for(i=1;i<=20;i++){
        document.write(message);
        document.write("<br>");
        message+=" * ";
    }
}