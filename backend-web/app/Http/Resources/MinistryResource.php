<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class   MinistryResource extends JsonResource
{
    /**
     * Transform the resource sinto an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}
