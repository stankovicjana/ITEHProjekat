<?php

namespace Database\Seeders;
use App\Models\Vrsta;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VrstaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $v1 = new Vrsta();
        $v1->naziv="Telefon";
        $v1->save();

        $v2 = new Vrsta();
        $v2->naziv="TV";
        $v2->save();

        $v3 = new Vrsta();
        $v3->naziv="Monitor";
        $v3->save();

        $v4 = new Vrsta();
        $v4->naziv="Miš";
        $v4->save();

        $v5 = new Vrsta();
        $v5->naziv="Tastatura";
        $v5->save();
    }
}
