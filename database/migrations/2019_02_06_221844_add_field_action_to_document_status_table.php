<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddFieldActionToDocumentStatusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('document_status', function (Blueprint $table) {
            $table->enum('action', ['AP', 'RE', 'EL', 'PR', 'AN'])->default('AP')
                  ->comment('Acción que realiza el estado del documento');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('document_status', function (Blueprint $table) {
            $table->dropColumn('action');
        });
    }
}