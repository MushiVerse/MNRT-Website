<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKalendasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kalendas', function (Blueprint $table) {
                $table->id();
                $table->string('event_name', 100);
                $table->text('event_des');
                $table->string('location', 50);
                $table->timestamp('event_date');
                $table->timestamp('end_date');
                $table->string('participants', 50);
                $table->string('guest_of_honor', 50);
                $table->string('created_by', 100)->nullable();
                $table->string('updated_by', 50)->nullable();
                $table->string('deleted_by', 50)->nullable();
                $table->boolean('status')->default('0');
                $table->timestamp('created_at');
                $table->timestamp('updated_at')->nullable();
                $table->timestamp('deleted_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kalendas');
    }
}
