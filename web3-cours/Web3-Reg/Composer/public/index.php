<?php
    require __DIR__ . './../vendor/autoload.php';

    use Fpdf\Fpdf;

    $pdf = new Fpdf();
    $pdf->AddPage();
    $pdf->setFont("Arial", "B", 16);
    $pdf->Cell(40, 10, "Hello world");
    $pdf->Output();