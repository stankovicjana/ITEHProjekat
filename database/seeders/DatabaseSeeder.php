<?php
namespace Database\Seeders;
use App\Models\Korpa;
use App\Models\Proizvod;
use App\Models\User;
use App\Models\Vrsta;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        User::truncate();
        Vrsta::truncate();
        Korpa::truncate();
        Proizvod::truncate();


        $admin = new User();
        $admin->name="Admin";
        $admin->email="admin@gmail.com";
        $admin->password= Hash::make("admin");
        $admin->admin = 1;
        $admin->save();
        User::factory(10)->create();

        $vs = new VrstaSeeder(); 
        $vs->run();

        
        $ps = new ProizvodSeeder();
        $ps->run();

    }
}
