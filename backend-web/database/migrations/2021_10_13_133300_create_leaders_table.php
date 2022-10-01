<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLeadersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leaders', function (Blueprint $table) {
            $table->id();
            $table->string('leader_name', 100);
            $table->string('leader_title', 100);
            $table->string('facebook_link', 100);
            $table->string('instagram_link', 100);
            $table->string('twitter_link', 100);
            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->string('picture', 100)->nullable();
            $table->text('biography')->nullable();
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
        Schema::dropIfExists('leaders');
    }
}
