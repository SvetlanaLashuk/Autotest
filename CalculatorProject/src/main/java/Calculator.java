import static java.lang.Double.NaN;

public class Calculator {
    public double addition(double number1, double number2){
        return round(number1 + number2);
    }

    public double subtraction(double number1, double number2){
        return round(number1 - number2);
    }

    public double multiplication(double number1, double number2){
        return round(number1 * number2);
    }

    public double division(double number1, double number2){
        if(number2!=0) {
            return round(number1 / number2);
        }
        else {
            return NaN;
        }
    }

    public double squareRoot(double number1){
        if(number1>=0) {
            return round(Math.sqrt(number1));
        }
        else{
            return NaN;
        }
    }

    private double round(double number){
        number = number*1000;
        int n =(int)Math.round(number);
        number = (double)n/1000;
        return number;
    }
}