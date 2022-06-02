<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePartidosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('partidos', function (Blueprint $table) {
            $table->id();

            $table->date('fecha')->nullable();
            $table->time('hora')->nullable();
            $table->string('campo')->nullable();
            $table->Integer('puntos_equipo')->nullable();
            $table->Integer('puntos_rival')->nullable();

            $table->unsignedBigInteger('rival_id')
            ->nullable()
            ->constrained('rivals')
            ->cascadeOnUpdate()
            ->nullOnDelete();

            $table->unsignedBigInteger('equipo_id')
            ->nullable()
            ->constrained('equipos')
            ->cascadeOnUpdate()
            ->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('partidos');
    }
}
