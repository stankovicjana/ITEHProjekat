<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {

            $table->string('phone')->default("+38160 5900 662") ; 
            $table->date('birthdate')->default('2000-5-3') ;
            $table->boolean('admin')->default(false);

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {

            $table->removeColumn('phone');
            $table->removeColumn('birthdate');
            $table->removeColumn('admin');

        });
    }
};
