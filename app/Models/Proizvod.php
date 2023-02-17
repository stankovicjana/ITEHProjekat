<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proizvod extends Model
{
    use HasFactory;
    protected $fillable = [
        'image',
        'naziv',
        'cena',
        'kolicina',
        'vrsta',
        'proizvodjac',
        'zemlja_porekla'
      ];

    public function vrsta()
    {
       return $this->belongsTo(Vrsta::class);
    }
    public function stavke()
    {
        return $this->belongsTo(StavkaKorpe::class);
    }
}
