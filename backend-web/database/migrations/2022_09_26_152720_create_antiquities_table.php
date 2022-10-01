<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAntiquitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('antiquities', function (Blueprint $table) {
            $table->id();
            $table->string('image_slider')->nullable();
            $table->string('image_slider_description',100)->nullable();
            $table->string('media_title',50)->nullable();
            $table->string('media_description',100)->nullable();
            $table->string('media_link',100)->nullable();
            $table->string('media_video')->nullable();
            $table->string('card_link', 100)->nullable();
            $table->string('card_img', 100)->nullable();
            $table->string('about_description',200)->nullable();
            $table->string('about_img')->nullable();
            $table->string('about_link')->nullabel();
            $table->timestamp('pub_date')->nullable();
            $table->date('exp_date')->nullable();
            $table->string('created_by', 100)->nullable();
            $table->string('updated_by', 50)->nullable();
            $table->string('deleted_by', 50)->nullable();
            $table->boolean('status')->default('0');
            $table->timestamp('created_at')->nullable();
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
        Schema::dropIfExists('antiquities');
    }
}
