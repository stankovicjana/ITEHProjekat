<?php

namespace Database\Seeders;

use App\Models\Proizvod;
use Illuminate\Database\Seeder;

class ProizvodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Proizvod::create(['image'=>'https://www.ctshop.rs/product/img/mobilni-telefoni/xiaomi-redmi-9c-3-64gb-sivi-mobilni-6-53octa-core-mediatek-helio-g35-2-3ghz-3gb-64gb-13mpx-2mpx-2mpx-dual-sim/square/99722211_5232595915.jpg', 'naziv'=>'Xiomi Redmi', 'cena'=>16500, 'kolicina'=>0, 'vrsta'=>1,'proizvodjac'=>'Xiaomi']);
        Proizvod::create(['image'=>'https://konovo.rs/media/2022/12/32a25adba53534c3726e3d24b2b60bed.jpg', 'naziv'=>'IPhone 12 ',   'cena'=>10100, 'kolicina'=>0, 'vrsta'=>1,'proizvodjac'=>'Apple']);
        Proizvod::create(['image'=>'https://www.sony.rs/image/6e61b47b3f1465e2e9ad82fd971f183f?fmt=pjpeg&wid=1200&hei=470&bgcolor=F1F5F9&bgc=F1F5F9', 'naziv'=>'Sony TV',   'cena'=>33000, 'kolicina'=>0, 'vrsta'=>2,'proizvodjac'=>'Sony']);
        Proizvod::create(['image'=>'https://images.samsung.com/is/image/samsung/rs-hd-t4300-ue32t4302akxxh-frontblack-229517272?$650_519_PNG$', 'naziv'=>'Samsung TV',   'cena'=>69900, 'kolicina'=>0, 'vrsta'=>2,'proizvodjac'=>'Samsung']);
        Proizvod::create(['image'=>'https://www.ctshop.rs/img/products/2019-03-14/philips-v-line-273v7qdsb-00-ips-monitor-27-quot_xWYQ9_3.jpg', 'naziv'=>'Monitor',   'cena'=>14990, 'kolicina'=>0, 'vrsta'=>3,'proizvodjac'=>'Philips']);
        Proizvod::create(['image'=>'https://mi-srbija.rs/storage/product/images/0f/48/tihi-wireless-mis-783.png', 'naziv'=>' Miš',   'cena'=> 3000, 'kolicina'=>4, 'vrsta'=>4,'proizvodjac'=>'Fantech']);
        Proizvod::create(['image'=>'https://fantech.b-cdn.net/wp-content/uploads/2021/05/K613X-1-600x600.png', 'naziv'=>'Tastatura',   'cena'=> 12000, 'kolicina'=>0, 'vrsta'=>5,'proizvodjac'=>'Fantech']);

    }
}
