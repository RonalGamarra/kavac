<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSignprofilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('signprofiles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id')->unsigned()->nullable()
                      ->comment('Identificador del usuario');
            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade');
            $table->string('cert', 3000)->comment('Certificado firmante');
            $table->string('pkey',2000)->comment('Clave privada asociada al certificado del firmante');
            $table->timestamps();
            $table->softDeletes()->comment('Fecha y hora en la que el registro fue eliminado');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('signprofiles');
    }
}
