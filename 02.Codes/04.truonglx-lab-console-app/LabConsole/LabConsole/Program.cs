// See https://aka.ms/new-console-template for more information

Console.WriteLine("Hello, World!");
Console.WriteLine("Enter first number");
var firstNumberStr = Console.ReadLine();
Console.WriteLine("Enter seconds number");
var secondNumberStr = Console.ReadLine();
int.TryParse(firstNumberStr, out var firstNb);
int.TryParse(secondNumberStr, out var second);
var sum = firstNb + second;
Console.WriteLine(sum);