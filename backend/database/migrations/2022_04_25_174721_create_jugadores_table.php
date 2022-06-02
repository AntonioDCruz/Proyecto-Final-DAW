<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJugadoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jugadors', function (Blueprint $table) {
            $table->id();

            $table->Integer('numero');
            $table->string('nacionalidad');
            $table->string('estado');
            $table->string('fec_nac');
            $table->Integer('min_jugados')->nullable();

            $table->unsignedBigInteger('position_id')
                    ->nullable()
                    ->constrained('positions')
                    ->cascadeOnUpdate()
                    ->nullOnDelete();

            $table->unsignedBigInteger('user_id')
                    ->nullable()
                    ->constrained('users')
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
        Schema::dropIfExists('jugadors');
    }
}
